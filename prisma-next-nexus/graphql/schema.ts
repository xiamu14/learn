import { schema, use } from "nexus";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "nexus-plugin-prisma";
import { APP_SECRET, getUserId } from "../pages/api/utils";
import { serializeCookie } from "../utils/serialize_cookie";

use(prisma({ features: { crud: true } }));

schema.objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
  },
});

schema.queryType({
  definition(t) {
    t.field("me", {
      type: "User",
      nullable: true,
      resolve: (_parent, _args, ctx) => {
        const userId = getUserId(ctx.token);
        if (!userId) {
          throw new Error("Invalid userId");
        }
        return ctx.db.user.findOne({
          where: {
            id: userId,
          },
        });
      },
    });
  },
});

schema.mutationType({
  definition(t) {
    t.crud.updateOneUser();

    t.field("register", {
      type: "User",
      args: {
        name: schema.stringArg(),
        email: schema.stringArg({ nullable: false }),
        password: schema.stringArg({ nullable: false }),
      },
      resolve: async (_parent, { name, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10);
        const user = await ctx.db.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });
        const token = sign({ userId: user.id }, APP_SECRET);
        const cookieSerialized = serializeCookie("token", token);
        ctx.res.setHeader("Set-Cookie", cookieSerialized);
        return user;
      },
    });

    t.field("login", {
      type: "User",
      args: {
        email: schema.stringArg({ nullable: false }),
        password: schema.stringArg({ nullable: false }),
      },
      resolve: async (_parent, { email, password }, ctx) => {
        const user = await ctx.db.user.findOne({
          where: {
            email,
          },
        });
        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }
        const passwordValid = await compare(password, user.password);
        if (!passwordValid) {
          throw new Error("Invalid password");
        }
        const token = sign({ userId: user.id }, APP_SECRET);

        const cookieSerialized = serializeCookie("token", token);

        ctx.res.setHeader("Set-Cookie", cookieSerialized);
        // ctx.log.info(cookieSerialized);

        return user;
      },
    });
  },
});


import 'package:sector/pages/application/application.dart';
import 'package:sector/pages/sign_in/sign_in.dart';
import 'package:sector/pages/sign_up/sign_up.dart';

var staticRoutes = {
  "/sign-in": (context) => SignInPage(),
  "/sign-up": (context) => SignUpPage(),
  "/app": (context) => ApplicationPage(),
};

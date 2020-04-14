import 'package:flutter/foundation.dart';

class UserRequestSigInEntity {
    String email;
    String password;

    UserRequestSigInEntity({
        @required this.email,
        @required this.password,
    });

    factory UserRequestSigInEntity.fromJson(Map<String, dynamic> json) => UserRequestSigInEntity(
        email: json["email"],
        password: json["password"],
    );

    Map<String, dynamic> toJson() => {
        "email": email,
        "password": password,
    };
}

class UserResponseEntity {
    String accessToken;
    String displayName;
    List<String> channels;

    UserResponseEntity({
        @required this.accessToken,
        this.displayName,
        this.channels,
    });

    factory UserResponseEntity.fromJson(Map<String, dynamic> json) => UserResponseEntity(
        accessToken: json["access_token"],
        displayName: json["display_name"],
        channels: List<String>.from(json["channels"].map((x) => x)),
    );

    Map<String, dynamic> toJson() => {
        "access_token": accessToken,
        "display_name": displayName,
        "channels": List<dynamic>.from(channels.map((x) => x)),
    };
}

import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { AuthGuardService } from "./auth-guard/auth-guard.service";
import { UsersModule } from "src/users/users.module";
@Module({
imports: [
UsersModule,
JwtModule.register({
global: true,
secret: jwtConstants.secret,
signOptions: { expiresIn: "60m" },
}),
],
controllers: [AuthController],
providers: [AuthService, AuthGuardService],
})
export class AuthModule {}
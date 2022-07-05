import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Guard를 통과해야 본격적인 요청의 처리가 시작되는 컨트롤러에 도달
// 단일 책임으로 런타임에 존재하는 특정 조건(권한, 역할 등)에 따라서
// 지정된 요청을 라우터 핸들러에 의해 처리할지 여부를 결정

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

}

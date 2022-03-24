import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '是否是管理员', enum: [0, 1] })
  /** 是否是管理员 */
  isAdmin: number;
  @ApiProperty({ description: '用户昵称', example: 'jack' })
  /** 用户昵称 */
  nickName: string;
  @ApiProperty({ description: '用户管理密码', example: 'jjj_123' })
  /** 用户管理密码 */
  password: string;
  @ApiPropertyOptional({ description: '用户连接密码', example: 'link_pwd123' })
  /** 用户连接密码 */
  linkPwd?: string;
  @ApiPropertyOptional({ description: '用户连接端口', example: 17009 })
  /** 用户连接端口 */
  port?: number;
  @ApiPropertyOptional({ description: '用户流量统计', example: 245246 })
  /** 用户流量统计 */
  statistics?: number;
}

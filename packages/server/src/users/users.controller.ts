import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: '新增用户',
    description: '新增用户',
    tags: ['用户管理'],
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: '用户查询-列表',
    description: '用户查询-列表',
    tags: ['用户管理'],
  })
  @ApiResponse({
    status: 200,
    type: CreateUserDto,
    isArray: true,
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '用户查询-单个用户明细',
    description: '用户查询-单个用户明细',
    tags: ['用户管理'],
  })
  @ApiResponse({
    status: 200,
    type: CreateUserDto,
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '用户更新',
    description: '用户更新',
    tags: ['用户管理'],
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '用户删除',
    description: '用户删除',
    tags: ['用户管理'],
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

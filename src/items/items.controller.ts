import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {

  @Get()
  fetchAllItems(): string {
    return `items array!`;
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): string {
    return `name: ${createItemDto.name}, description: ${createItemDto.description}, quantity: ${createItemDto.quantity}`;
  }

  @Put()
  updateItem(): string {
    return `item has been updated!`;
  }

  @Delete()
  deleteItem(): string {
    return `item has been deleted!`;
  }



}

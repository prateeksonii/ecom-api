import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateProductDto } from './create-product.dto';
import { AddProductImagesDto } from './add-product-images.dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async getProducts() {
    return this.prismaService.product.findMany();
  }

  async createProduct(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        name: createProductDto.name,
        description: createProductDto.description,
        prices: [createProductDto.price],
      },
    });
  }

  async addImagesToProduct(addProductImagesDto: AddProductImagesDto) {
    return this.prismaService.product.update({
      where: {
        id: addProductImagesDto.productId,
      },
      data: {
        images: {
          push: addProductImagesDto.images,
        },
      },
    });
  }
}

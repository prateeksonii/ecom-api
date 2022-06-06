import { Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts() {
    const products = await this.productsService.getProducts();

    return {
      ok: true,
      result: {
        products,
      },
    };
  }

  @Post()
  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.productsService.createProduct(createProductDto);

    return {
      ok: true,
      result: {
        product,
      },
    };
  }
}

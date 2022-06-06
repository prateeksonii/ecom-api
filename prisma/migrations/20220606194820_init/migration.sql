-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "prices" DECIMAL(10,2)[],
    "images" VARCHAR(1000)[],
    "ratings" DECIMAL(1,1)[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

import Product from '../models/Product';
import { Op } from 'sequelize';

class ProductService {

    // get all product
    static async getAllProducts(): Promise<Product[]> {
        return await Product.findAll();
    }

    // get product by id ASC
    static async getProductByIdAsc(productId: number): Promise<Product | null> {
        return await Product.findOne({
            where: {
                productId: productId
            },
            order: [
                ['productId', 'ASC']
            ]
        });
    }

    // get product by id DESC
    static async getProductByIdDesc(productId: number): Promise<Product | null> {
        return await Product.findOne({
            where: {
                productId: productId
            },
            order: [
                ['productId', 'DESC']
            ]
        });
    }

    // get product by price 
    static async geProductByPrice(price: string): Promise<Product | null> {
        return await Product.findOne({
            where: {
                price: price
            },
        });
    }

    // get product by price ASC 
    static async geProductByPriceAsc(price: string): Promise<Product | null> {
        return await Product.findOne({
            where: {
                price: price
            },
            order: [
                ['price', 'ASC']
            ]
        });
    }
    // get product by price DESC 
    static async geProductByPriceDesc(price: string): Promise<Product | null> {
        return await Product.findOne({
            where: {
                price: price
            },
            order: [
                ['price', 'DESC']
            ]
        });
    }

    // get product between price ASC
    static async getProductBetweenPriceAsc(minPrice: number, maxPrice: number): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                price: {
                    [Op.gte]: minPrice,  // Greater than or equal to start date
                    [Op.lte]: maxPrice     // Less than or equal to end date
                }
            },
            order: [
                ['price', 'ASC']
            ]
        });

        return products;
    }
    // get product between price DESC
    static async getProductBetweenPriceDesc(minPrice: number, maxPrice: number): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                price: {
                    [Op.gte]: minPrice,  // Greater than or equal to start date
                    [Op.lte]: maxPrice     // Less than or equal to end date
                }
            },
            order: [
                ['price', 'DESC']
            ]
        });

        return products;
    }
    // get product by createdAt ASC
    static async getProductByCreatedAtAsc(createdAt: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                createdAt: createdAt
            },
            order: [
                ['createdAt', 'ASC']
            ]
        });

        return products;
    }
    // get product by createdAt DESC
    static async getProductByCreatedAtDesc(createdAt: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                createdAt: createdAt
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return products;
    }
    // get product by createdAt DESC since a given date
    static async getProductSinceCreatedAtAsc(createdAt: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                createdAt: {
                    [Op.gte]: createdAt  // Greater than or equal to given date
                }
            },
            order: [
                ['createdAt', 'ASC']
            ]
        });

        return products;
    }
    // get product by createdAt DESC since a given date
    static async getProductSinceCreatedAtDesc(createdAt: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                createdAt: {
                    [Op.gte]: createdAt  // Greater than or equal to given date
                }
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return products;
    }

    // get product by createdAt ASC between two dates
    static async getProductBetweenCreatedAtAsc(startDate: Date, endDate: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                createdAt: {
                    [Op.gte]: startDate,  // Greater than or equal to start date
                    [Op.lte]: endDate     // Less than or equal to end date
                }
            },
            order: [
                ['createdAt', 'ASC']
            ]
        });

        return products;
    }

    // get product by createdAt DESC between two dates
    static async getProductBetweenCreatedAtDesc(startDate: Date, endDate: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                createdAt: {
                    [Op.gte]: startDate,  // Greater than or equal to start date
                    [Op.lte]: endDate     // Less than or equal to end date
                }
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return products;
    }

    // get product by updatedAt ASC
    static async getProductByUpdatedAtAsc(updatedAt: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                updatedAt: updatedAt
            },
            order: [
                ['updatedAt', 'ASC']
            ]
        });

        return products;
    }

    // get product by updatedAt ASC
    static async getProductByUpdatedAtDesc(updatedAt: Date): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                updatedAt: updatedAt
            },
            order: [
                ['updatedAt', 'DESC']
            ]
        });

        return products;
    }

    // Country ASC
    static async getProductByCountryAsc(country: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                country: country
            },
            order: [
                ['country', 'ASC']
            ]
        });
        return products;
    }

    // Country DESC
    static async getProductByCountryDesc(country: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                country: country
            },
            order: [
                ['country', 'DESC']
            ]
        });
        return products;
    }

    // City ASC
    static async getProductByCityAsc(city: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                city: city
            },
            order: [
                ['city', 'ASC']
            ]
        });
        return products;
    }

    // City DESC
    static async getProductByCityDesc(city: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                city: city
            },
            order: [
                ['city', 'DESC']
            ]
        });
        return products;
    }
    // District ASC
    static async getProductByDistrictAsc(district: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                district: district
            },
            order: [
                ['district', 'ASC']
            ]
        });
        return products;
    }

    // District DESC
    static async getProductByDistrictDesc(district: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                district: district
            },
            order: [
                ['district', 'DESC']
            ]
        });
        return products;
    }
    // School ASC
    static async getProductBySchoolAsc(school: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                school: school
            },
            order: [
                ['school', 'ASC']
            ]
        });
        return products;
    }

    // School DESC
    static async getProductBySchoolDesc(school: string): Promise<Product[]> {
        const products = await Product.findAll({
            where: {
                school: school
            },
            order: [
                ['school', 'DESC']
            ]
        });
        return products;
    }

    // create product
    static async createProduct(userData: any): Promise<Product> {
        return await Product.create(userData);
    }

    // update product
    static async updateProduct(productId: number, updateData: any): Promise<number> {
        const affectedCount = await Product.update(updateData, {
            where: {
                id: productId
            }
        });
        return affectedCount[0];
    }

    // delete product
    static async deleteProduct(productId: number): Promise<void> {
        await Product.destroy({
            where: {
                id: productId
            }
        });
    }

}

export default ProductService;

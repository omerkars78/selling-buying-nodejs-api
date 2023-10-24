import Product from '../models/Product';

class ProductService {
    // Kullanıcı oluşturma
    static async createProduct(userData: any): Promise<Product> {
        return await Product.create(userData);
    }

// Kullanıcı bilgilerini güncelleme
static async updateProduct(productId: number, updateData: any): Promise<number> {
    const affectedCount = await Product.update(updateData, {
        where: {
            id: productId
        }
    });
    return affectedCount[0];
}



    // Kullanıcıyı ID ile al
    static async getProductById(productId: number): Promise<Product | null> {
        return await Product.findByPk(productId);
    }

    // Kullanıcıyı e-posta ile al
    static async geProductByPrice(price: string): Promise<Product | null> {
        return await Product.findOne({
            where: {
                price:price
            }
        });
    }

    // Tüm kullanıcıları listele
    static async getAllProducts(): Promise<Product[]> {
        return await Product.findAll();
    }

    // Kullanıcıyı sil
    static async deleteProduct(productId: number): Promise<void> {
        await Product.destroy({
            where: {
                id: productId
            }
        });
    }

    // Diğer fonksiyonları da buraya ekleyebilirsiniz.
}

export default ProductService;

import User from '../models/User';

class UserService {
    // Kullanıcı oluşturma
    static async createUser(userData: any): Promise<User> {
        return await User.create(userData);
    }

// Kullanıcı bilgilerini güncelleme
static async updateUser(userId: number, updateData: any): Promise<number> {
    const affectedCount = await User.update(updateData, {
        where: {
            id: userId
        }
    });
    return affectedCount[0];
}



    // Kullanıcıyı ID ile al
    static async getUserById(userId: number): Promise<User | null> {
        return await User.findByPk(userId);
    }

    // Kullanıcıyı e-posta ile al
    static async getUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({
            where: {
                email: email
            }
        });
    }

    // Tüm kullanıcıları listele
    static async getAllUsers(): Promise<User[]> {
        return await User.findAll();
    }

    // Kullanıcıyı sil
    static async deleteUser(userId: number): Promise<void> {
        await User.destroy({
            where: {
                id: userId
            }
        });
    }

    // Diğer fonksiyonları da buraya ekleyebilirsiniz.
}

export default UserService;

import User from '../models/User';

class UserService {
    // create user
    static async createUser(userData: any): Promise<User> {
        return await User.create(userData);
    }

    // update user
    static async updateUser(userId: number, updateData: any): Promise<number> {
        const affectedCount = await User.update(updateData, {
            where: {
                id: userId
            }
        });
        return affectedCount[0];
    }

    // get users informations by id 
    static async getUserById(userId: number): Promise<User | null> {
        return await User.findByPk(userId);
    }

    // get user's email by id 
    static async getUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({
            where: {
                email: email
            }
        });
    }

    // get all users
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


}

export default UserService;

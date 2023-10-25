import { DataTypes, Model, Sequelize } from 'sequelize';
import Comment from './comment';
import User from './User';

class UserComment extends Model {
    public userId!: number;
    public commentId!: number;

    public static initialize(sequelize: Sequelize) {
        UserComment.init({
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: User,
                    key: 'id'
                },
                primaryKey: true
            },
            commentId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: Comment,
                    key: 'id'
                },
                primaryKey: true
            }
        }, {
            sequelize,
            modelName: 'userComment',
            timestamps: true,
            paranoid:true
        });
    }
}

export default UserComment;
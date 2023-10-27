import { DataTypes, Model, Sequelize } from 'sequelize';
import Blog from './Blog';
import Like from './Like';
import User from './User';

class LikeBlog extends Model {
    public blogId!: number;
    public likeId!: number;
    public userId!: number;
    public static initialize(sequelize: Sequelize) {
        LikeBlog.init({
           likeId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Like,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            blogId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Blog,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            userId:{
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            }
        }, {
            tableName: 'like_blog',
            sequelize: sequelize,
            paranoid:true
        });
    }
}

export default LikeBlog;

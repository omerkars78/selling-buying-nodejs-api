import { DataTypes, Model, Sequelize } from 'sequelize';
import Comment from './Comment';
import Blog from './Blog';


class BlogComment extends Model {
    public commentId!: number;
    public blogId!: number;

    public static initialize(sequelize: Sequelize) {
        BlogComment.init({
            commentId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Comment,
                    key: 'id'
                },
            },
            blogId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Blog,
                    key: 'id'
                }
            }
        }, {
            tableName: 'comment_blog',
            sequelize: sequelize,
            paranoid:true
        });
    }
}

export default BlogComment;

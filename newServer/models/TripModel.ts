import { prisma } from "../connection/db.client";

const TripModel = {
    getAllTrips: async () => {
        const [result] = await prisma.;
        return result;
    },
    getTrip: async (id: string) => {
        const [result] = await prisma.query(`SELECT * FROM products WHERE product_id = ?`, [id]);
        return result;
    },
    createTrip: async (product_name: string, price: string, stock_quantity: number, category_id: number) => {
        const [result] = await prisma.query(`INSERT INTO products (product_name, price, stock_quantity, category_id) VALUES ('${product_name}', '${price}', '${stock_quantity}','${category_id}')`);
        return result;
    },
    // updateProduct: async (id: string, product_name: string, price: number, stock_quantity: number, category_id: number) => {
    //     const [result] = await prisma.query(`UPDATE products SET product_name = '${product_name}', price = '${price}', stock_quantity = ${stock_quantity}, category_id = ${category_id} WHERE product_id = ?`,[id]);
    //     return result;
    // },
    updateTrip: async (id: string, product_name: string, price: number, stock_quantity: number, category_id: number) => {
        const [result] = await prisma.query('UPDATE products SET product_name = ?, price = ?, stock_quantity = ?, category_id = ? WHERE product_id = ?', [product_name, price, stock_quantity, category_id, id]);
        return result;
    },
    
    deleteTrip: async (id: string) => {
        const [result] = await prisma.query(`DELETE FROM products WHERE product_id = ?`,[id]);
        return result;
    },

}

export default TripModel;

import pool from '../configs/connectDB';
let getAllUser = async (req, res) => {
    console.log('nghia:')
    const [rows, fields] = await pool.execute('SELECT * FROM tbl_order');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let { food, price, qty, total, order_date, status, customer_name, customer_contact, customer_email, customer_address } = req.body;
    if (!food || !price || !qty || !total || !order_date || !status || !customer_name || !customer_contact || !customer_email || !customer_address) {
        return res.status(200).json({
            message: 'missing requied params',
            data: req.body
        })
    }
    await pool.execute('insert into tbl_order (food, price, qty, total, order_date, status, customer_name, customer_contact, customer_email, customer_address) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [food, price, qty, total, order_date, status, customer_name, customer_contact, customer_email, customer_address]);
    const [rows, fields] = await pool.execute('SELECT * FROM tbl_order');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
let updateUser = async (req, res) => {
    let { food, price, qty, total, order_date, status, customer_name, customer_contact, customer_email, customer_address, id } = req.body;
    if (!food || !price || !qty || !total || !order_date || !status || !customer_name || !customer_contact || !customer_email || !customer_address, !id) {
        return res.status(200).json({
            message: 'missing requied params',
        })
    }
    await pool.execute('update tbl_order set food = ?, price = ?, qty = ?, total = ?, order_date = ?, status = ?, customer_name = ?, customer_contact = ?, customer_email = ?, customer_address = ? where id = ?',
        [food, price, qty, total, order_date, status, customer_name, customer_contact, customer_email, customer_address, id]);
    const [rows, fields] = await pool.execute('SELECT * FROM tbl_order');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
let deleteUser = async (req, res) => {
    console.log('check id: ', req.params.id);
    let deleteId = req.params.id;
    if (!deleteId) {
        return res.status(200).json({
            message: 'missing requied params'
        })
    }
    await pool.execute('DELETE FROM tbl_order WHERE id = ?', [deleteId])
    const [rows, fields] = await pool.execute('SELECT * FROM tbl_order');
    return res.status(200).json({
        message: 'oke',
        data: rows
    })
}
module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser
}
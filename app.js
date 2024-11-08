const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Đọc dữ liệu từ file JSON
function readProductsData() {
    const filePath = path.join(__dirname, 'data', 'products.json');
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

// GET tất cả sản phẩm
app.get('/api/products', (req, res) => {
    const data = readProductsData();
    res.json(data.products);
});

// GET sản phẩm theo ID
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = readProductsData();
    const product = data.products.find(p => p.id === id);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
});

// Tìm kiếm sản phẩm
app.get('/api/products/search/:keyword', (req, res) => {
    const keyword = req.params.keyword.toLowerCase();
    const data = readProductsData();
    const filteredProducts = data.products.filter(p => 
        p.name.toLowerCase().includes(keyword)
    );
    res.json(filteredProducts);
});

// Thêm sản phẩm mới
app.post('/api/products', (req, res) => {
    const data = readProductsData();
    const newProduct = req.body;
    newProduct.id = data.products.length + 1;
    
    data.products.push(newProduct);
    
    fs.writeFileSync(
        path.join(__dirname, 'data', 'products.json'),
        JSON.stringify(data, null, 4)
    );
    
    res.status(201).json(newProduct);
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});

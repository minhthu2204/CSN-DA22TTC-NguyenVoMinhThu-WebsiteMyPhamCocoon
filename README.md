# Tên Dự Án

## Giới thiệu

Dự án này là một [mô tả ngắn gọn về dự án]. Mục tiêu của dự án là [mục tiêu chính của dự án]. Dự án được phát triển để [mục đích hoặc vấn đề mà dự án giải quyết].

## Ngôn ngữ và Công nghệ sử dụng

- **Ngôn ngữ lập trình**: [Tên ngôn ngữ lập trình, ví dụ: JavaScript, Python, Java]
- **Thư viện/Framework**: [Tên thư viện hoặc framework, nếu có, ví dụ: React, Node.js, Django]
- **Công cụ khác**: [Các công cụ khác được sử dụng, ví dụ: Docker, Git]

## Cách chạy dự án

Để chạy dự án này trên máy của bạn, hãy làm theo các bước sau:

1. **Clone repository**:
   ```sh
   git clone https://github.com/username/repository.git
   cd repository
   ```

2. **Cài đặt các phụ thuộc**:
   ```sh
   npm install
   ```

3. **Chạy dự án**:
   ```sh
   npm start
   ```

4. **Truy cập ứng dụng**:
   Mở trình duyệt và truy cập `http://localhost:3000` để xem ứng dụng.

## Đóng góp

Nếu bạn muốn đóng góp cho dự án này, vui lòng tạo một pull request hoặc mở một issue để thảo luận về những thay đổi bạn muốn thực hiện.

## Giấy phép

Dự án này được cấp phép theo [Tên giấy phép, ví dụ: MIT License]. Xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.
### Các bước cài đặt

1. Clone dự án về máy:
```bash
git clone https://github.com/minhthu2204/CSN-DA22TTC-NguyenVoMinhThu-WebsiteMyPhamCocoon
cd CSN-DA22TTC-NguyenVoMinhThu-WebsiteMyPhamCocoon
```

2. Cài đặt các dependencies:
```bash
npm install
```

3. Khởi động server:
```bash
node app.js
```


4. Truy cập website:
- Mở trình duyệt web
- Truy cập địa chỉ: `http://localhost:3000`

## Cấu trúc thư mục
```
cosonganh/
├── app.js # Server entry point
├── data.json # Database chính
├── data/ # Thư mục chứa các file JSON theo danh mục
├── index.html # Trang chủ
├── nav.html # Navigation component
├── search.html # Trang tìm kiếm
└── [category]-detail.html # Các trang chi tiết sản phẩm
```

## API Endpoints
- `GET /api/products`: Lấy tất cả sản phẩm
- `GET /api/products/:category`: Lấy sản phẩm theo danh mục
- `GET /api/product/:id`: Lấy chi tiết sản phẩm theo ID
- `GET /api/search?q=keyword`: Tìm kiếm sản phẩm

## Lưu ý
- Đảm bảo port 3000 không bị sử dụng bởi ứng dụng khác
- Cần có kết nối internet để tải các thư viện Bootstrap và jQuery từ CDN
- Các hình ảnh sản phẩm cần được đặt trong thư mục phù hợp và đảm bảo đường dẫn chính xác
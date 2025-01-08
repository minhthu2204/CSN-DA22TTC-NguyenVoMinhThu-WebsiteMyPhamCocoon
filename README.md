# Website Giới Thiệu Mỹ Phẩm Cocoon

## Giới thiệu
Website giới thiệu và bán mỹ phẩm Cocoon được xây dựng bằng HTML, CSS và JavaScript. Website có các chức năng cơ bản như xem sản phẩm, thêm vào giỏ hàng, đọc bài viết và thanh toán.

## Công nghệ sử dụng
- HTML5
- CSS3 
- JavaScript
- W3.CSS Framework
- Font Awesome Icons
- LocalStorage để lưu giỏ hàng

## Hướng dẫn cài đặt và chạy trên máy cục bộ

### Yêu cầu hệ thống
- Trình duyệt web hiện đại (Chrome, Firefox, Edge,...)
- Text editor (VS Code, Sublime Text,...)
- Live Server extension (VS Code) hoặc web server cục bộ

### Các bước cài đặt

1. Tải source code
- Tải trực tiếp file zip từ repository
- Hoặc clone qua Git:
```bash
git clone https://github.com/your-username/cocoon-website.git
```

2. Giải nén (nếu tải file zip)
- Giải nén file zip vào thư mục mong muốn

3. Mở project
- Mở thư mục project bằng text editor
- Với VS Code: File > Open Folder > Chọn thư mục project

4. Cài đặt Live Server (VS Code)
- Mở VS Code Extensions
- Tìm "Live Server"
- Nhấn Install

5. Chạy website
- Click chuột phải vào file index.html
- Chọn "Open with Live Server"
- Website sẽ tự động mở trên trình duyệt mặc định

### Cấu trúc thư mục
```
cocoon-website/
├── index.html          # Trang chủ
├── product.html        # Trang sản phẩm
├── blog.html          # Trang bài viết
├── cart.html          # Trang giỏ hàng
├── blog-detail.html   # Trang chi tiết bài viết
├── css/               # Thư mục chứa file CSS
├── js/                # Thư mục chứa file JavaScript  
└── images/            # Thư mục chứa hình ảnh
```

## Lưu ý
- Đảm bảo có kết nối internet để tải các thư viện từ CDN
- Không xóa hoặc di chuyển các file trong thư mục
- Các hình ảnh cần đặt đúng đường dẫn trong thư mục images

## Người phát triển
- Họ tên: Nguyễn Võ Minh Thư
- MSSV: 110122174
## Công nghệ sử dụng

### Frontend:
- HTML5
- CSS (Tailwind CSS)
- JavaScript
- Font Awesome (icons)

### Backend:
- Node.js
- JSON cục bộ (data.json)

### API:
- REST API (kết nối với JSON cục bộ)

## Cấu trúc thư mục
```
project/
├── images/
├── index.html
├── gioithieu.html
├── sanpham.html
├── thongtin.html
├── cart.html
├── checkout.html
├── nav.html
├── chaucay.html
├── dat.html
├── phanbon.html
├── xuongrong.html
├── xuongrong-senda.html
├── search-results.html
│ ├── main.js
│ ├── cart.js
│ ├── data.js
│ ├── cart.js
│ ├── search.js
│ ├── include.js
│ └── java.js
├── server.js
└── package.json

```

## Cách chạy dự án

###  Cài đặt Node.js và npm

### Clone repository về máy:
```bash
git clone [url-repository]
```

###  Cài đặt các dependencies:
```bash
npm install
```

###  Chạy server:
```bash
npm start
```

### Truy cập website tại địa chỉ:
```
http://localhost:3000
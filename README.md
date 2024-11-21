
# Book-Review

"Book Review" application that allows users to browse, add, edit, and delete book reviews. Users can submit their thoughts on books they’ve read, including ratings and comments. The application provides a platform for users to share their opinions and discover new books through community reviews.

## Frontend Setup (React)
1. Navigate to the frontend project directory.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run start
   ```

## Backend Setup (Spring Boot with JDBC)
1. Navigate to the backend project directory.
2. Ensure you have the required dependencies in your `pom.xml` for Spring Boot and JDBC.
3. Start the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   Or, if using an IDE, run the `BookReviewApplication.java` file.

## Login Credentials
To log in, use the following credentials:
- **Email**: admin1@gmail.com
- **Password**: ad1234567

## API Endpoints

### Review Endpoints
- **POST** `/reviews/addReview`: Add a new review
- **PUT** `/reviews/updateReview/{id}`: Update an existing review
- **DELETE** `/reviews/deleteReview/{id}`: Delete a review by ID
- **GET** `/reviews/reviewByuserid/{id}`: Get all reviews by a user ID
- **GET** `/reviews/getAllReviews`: Get all reviews
- **GET** `/reviews/filterReviewsByRatingAndDate`: Filter reviews by rating and date and book title
- **GET** `/reviews/getBookNames`: Get all book titles

### Authentication Endpoints
- **POST** `/auth/signup`: User sign-up
- **POST** `/auth/login`: User login

### Example API Usage
1. To delete a review:
   ```
   DELETE http://localhost:9998/reviews/deleteReview/{id}
   ```
2. To get reviews by a user:
   ```
   GET http://localhost:9998/reviews/reviewByuserid/{id}
   ```

## Database Tables

### Users Table
| Column       | Type        | Description       |
|--------------|-------------|-------------------|
| id           | bigint      | Primary Key       |
| password     | varchar(255)| User password     |
| email        | varchar(100)| Unique user email |
| full_name    | varchar(255)| Full name of user |
| phone_number | varchar(15) | Phone number      |

### Reviews Table
| Column      | Type        | Description           |
|-------------|-------------|-----------------------|
| id          | bigint      | Primary Key           |
| user_id     | bigint      | Foreign Key to Users  |
| title       | varchar(255)| Title of the book     |
| author      | varchar(255)| Author of the book    |
| rating      | int         | Rating (1-5)          |
| review_text | text        | Text of the review    |
| date_added  | date        | Date when review was added |
| book_id     | bigint      | Foreign Key to Books  |

### Books Table
| Column      | Type        | Description         |
|-------------|-------------|---------------------|
| id          | bigint      | Primary Key         |
| title       | varchar(255)| Book title          |
| author      | varchar(255)| Book author         |
| created_at  | date        | Date the book was added |

---

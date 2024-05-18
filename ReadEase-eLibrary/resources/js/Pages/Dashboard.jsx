import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "@/Pages/css/dashboard.css";
import { Head } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard({
  auth,
  completedBooks,
  notStartedBooks,
  inProgressBooks,
  nbPages,
  completedBooksData,
  notStartedBooksData,
  inProgressBooksData,
}) {

  const removeBook = (bookId) => {
    const confirmed = window.confirm('Are you sure you want to remove this book?');
    if (confirmed) {
      Inertia.delete(route("booklist.destroy", bookId));
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12 container">
        <h2 className="section__title">Personal Reading Statistics</h2>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 cardsContainer">
          <div className="card text">
            <h3 className="cardTitle">Completed Books:</h3>
            <p>{completedBooks}</p>
          </div>
          <div className="card text">
            <h3 className="cardTitle">In progress Books:</h3>
            <p>{inProgressBooks}</p>
          </div>
          <div className="card text">
            <h3 className="cardTitle">Not started Books:</h3>
            <p>{notStartedBooks}</p>
          </div>
          <div className="card text">
            <h3 className="cardTitle">Reading pages:</h3>
            <p>{nbPages}</p>
          </div>
        </div>

        <section className="featured section" id="featured">
          <h2 className="section__title">The Completed Books</h2>
          {completedBooksData.length === 0 ? (
            <p className="noData">No completed books Yet</p>
          ) : (
            <p></p>
          )}
          <div className="booklist-content grid">
            {completedBooksData.length === 0 ? (
              <p></p>
            ) : (
              completedBooksData.data.map((book) => (
                <div
                  className="book-item flex flex-column flex-sb"
                  key={book.id}
                >
                  <div className="book-item-img">
                    <img src={book.image_path} alt="cover" />
                  </div>
                  <div className="book-item-info text-center">
                    <div className="book-item-info-item titles">
                      <span className="tit">{book.name}</span>
                    </div>
                    <div className="book-item-info-item author">
                      <span className="text-capitalize">
                        <span className="stit">Author: </span>
                        {book.author}
                      </span>
                    </div>
                    <div className="book-item-info-item category">
                      <span className="text-capitalize">
                        <span className="stit">category: </span>
                        {book.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="dashButton readButton">Read</button>
                      <button className="dashButton removeButton" onClick={() => removeBook(book.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          {completedBooksData.length === 0 ? (
            <p></p>
          ) : (
            <Pagination
              links={completedBooksData.meta.links}
              pageParameter="completed_page"
            />
          )}
        </section>

        <section className="featured section" id="featured">
          <h2 className="section__title">The In Progress Books</h2>
          {inProgressBooksData.length === 0 ? (
            <p className="noData"> No Books In Progress Yet</p>
          ) : (
            <p></p>
          )}
          <div className="booklist-content grid">
            {inProgressBooksData.length === 0 ? (
              <p></p>
            ) : (
              inProgressBooksData.data.map((book) => (
                <div
                  className="book-item flex flex-column flex-sb"
                  key={book.id}
                >
                  <div className="book-item-img">
                    <img src={book.image_path} alt="cover" />
                  </div>
                  <div className="book-item-info text-center">
                    <div className="book-item-info-item titles">
                      <span className="tit">{book.name}</span>
                    </div>
                    <div className="book-item-info-item author">
                      <span className="text-capitalize">
                        <span className="stit">Author: </span>
                        {book.author}
                      </span>
                    </div>
                    <div className="book-item-info-item category">
                      <span className="text-capitalize">
                        <span className="stit">category: </span>
                        {book.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="dashButton readButton">Read</button>
                    <button className="dashButton removeButton" onClick={() => removeBook(book.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          {inProgressBooksData.length === 0 ? (
            <p></p>
          ) : (
            <Pagination
              links={inProgressBooksData.meta.links}
              pageParameter="in_progress_page"
            />
          )}
        </section>

        <section className="featured section" id="featured">
          <h2 className="section__title">The Books Not Yet Started</h2>
          {notStartedBooksData.length === 0 ? (
            <p className="noData"> No Books In Not Started Yet</p>
          ) : (
            <p></p>
          )}
          <div className="booklist-content grid">
            {notStartedBooksData.length === 0 ? (
              <p></p>
            ) : (
              notStartedBooksData.data.map((book) => (
                <div
                  className="book-item flex flex-column flex-sb"
                  key={book.id}
                >
                  <div className="book-item-img">
                    <img src={book.image_path} alt="cover" />
                  </div>
                  <div className="book-item-info text-center">
                    <div className="book-item-info-item titles">
                      <span className="tit">{book.name}</span>
                    </div>
                    <div className="book-item-info-item author">
                      <span className="text-capitalize">
                        <span className="stit">Author: </span>
                        {book.author}
                      </span>
                    </div>
                    <div className="book-item-info-item category">
                      <span className="text-capitalize">
                        <span className="stit">category: </span>
                        {book.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="dashButton readButton">Read</button>
                    <button className="dashButton removeButton" onClick={() => removeBook(book.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          {notStartedBooksData.length === 0 ? (
            <p></p>
          ) : (
            <Pagination
              links={notStartedBooksData.meta.links}
              pageParameter="not_started_page"
            />
          )}
        </section>
      </div>
    </AuthenticatedLayout>
  );
}

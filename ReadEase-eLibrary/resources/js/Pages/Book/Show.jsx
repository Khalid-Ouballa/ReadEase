import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "@/Pages/css/bookShow.css";
import "../../../css/fontAwesome/css/all.min.css";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Show({ auth, book }) {
  
  const addBookToList = () => {
    Inertia.post(route("booklist.store", book.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {`Book "${book.name}"`}
        </h2>
      }
    >
      <Head title={`Book "${book.name}"`} />

      <div className="py-12">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="book-details">
            <div className="container">
              <div className="linkDiv">
                <Link href={route("book.index")}>
                  <i className="fa-solid fa-arrow-left">Go Back</i>
                </Link>
              </div>
              <div className="book-details-content grid">
                <div className="book-details-img">
                  <img src={`../${book.image_path}`} alt="cover image" />
=======
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="book-details">
                      <div className="container">
                        <div className="linkDiv">
                          <Link href={route('book.index')}>
                            <i class="fa-solid fa-arrow-left">Go Back</i>
                          </Link>
                        </div>
                        <div className="book-details-content grid">
                          <div className="book-details-img">
                            <img src={`../${book.image_path}`}  alt="cover image" />
                          </div>
                          <div className="book-details-info">
                            <div className="title">
                              <span>{book.name}</span>
                            </div>
                            <div className="book-details-item">
                              <span className="detailSpan">Written by: </span>
                              <span className="text-italic">{book.author}</span>
                            </div>
                            <div className="book-details-item">
                              <span className="detailSpan">Category: </span>
                              <span className="text-italic">{book.category}</span>
                            </div>
                            <div className="book-details-item">
                              <span className="detailSpan">Language: </span>
                              <span className="text-italic">{book.language}</span>
                            </div>
                            <div className="book-details-item description">
                            <span className="detailSpan">Description: </span>
                              <span className="">{book.description}</span>
                            </div>
                            <div className="detailButton">
                            <Link href={route("booklist.store")}>
                                <button>Add to List</button>
                          </Link>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
>>>>>>> khalid
                </div>
                <div className="book-details-info">
                  <div className="title">
                    <span>{book.name}</span>
                  </div>
                  <div className="book-details-item">
                    <span className="detailSpan">Written by: </span>
                    <span className="text-italic">{book.author}</span>
                  </div>
                  <div className="book-details-item">
                    <span className="detailSpan">Category: </span>
                    <span className="text-italic">{book.category}</span>
                  </div>
                  <div className="book-details-item">
                    <span className="detailSpan">Language: </span>
                    <span className="text-italic">{book.language}</span>
                  </div>
                  <div className="book-details-item description">
                    <span className="detailSpan">Description: </span>
                    <span className="">{book.description}</span>
                  </div>
                  <div className="detailButton">
                    <Link>
                    <button onClick={addBookToList}>Add to List</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

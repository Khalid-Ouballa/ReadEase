import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "@/Pages/css/bookIndex.css";
import { Head, Link, router} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import SelectInput2 from "@/Components/SelectInput2";

export default function Index({ auth, books, queryParams = null }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

  router.get(route("book.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if(e.key !== 'Enter') return;
      searchFieldChanged(name, e.target.value);
  };
  const searchFieldChanged2 = (author, value) => {
    if (value) {
      queryParams[author] = value;
    } else {
      delete queryParams[author];
    }

  router.get(route("book.index"), queryParams);
  };

  const onKeyPress2 = (author, e) => {
    if(e.key !== 'Enter') return;
      searchFieldChanged2(author, e.target.value);
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Books
        </h2>
      }
    >
      <Head title="Books" />

        <section className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 container">
            <span className="filterSpan">Filter by :</span>
            <div class="filtersContainer">
              <TextInput
              className="w-full"
              id="allInputs"
              defaultValue={queryParams.name}
              placeholder="Book Name"
              onBlur={(e) => searchFieldChanged("name", e.target.value)}
              onKeyPress={(e) => onKeyPress("name", e)}
              />
              <TextInput
              id="allInputs"
              className="w-full"
              defaultValue={queryParams.author}
              placeholder="Author Name"
              onBlur={(e) => searchFieldChanged2("author", e.target.value)}
              onKeyPress={(e) => onKeyPress2("author", e)}
              />
              <SelectInput
              className="w-full allInputs"
              defaultValue={queryParams.category}
              onChange={(e) => searchFieldChanged("category", e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="philosophy">Philosophy</option>
                <option value="history">History</option>
                <option value="biography">Biography</option>
                <option value="business">Business</option>
                <option value="adventure">Adventure</option>
                <option value="fantasy">Fantasy</option>
              </SelectInput>
              <SelectInput2
              className="w-full allInputs"
              defaultValue={queryParams.language}
              onChange={(e) => searchFieldChanged("language", e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="arabic">Arabic</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </SelectInput2>
            </div>
            <div className="booklist-content grid">
              {books.data.map((book) => (
                <div
                className="book-item flex flex-column flex-sb"
                key={book.id}>
                  <Link href={route('book.show', book.id)}>
                  <div className="book-item-img">
                    <img src={book.image_path} alt="cover" />
                  </div>
                  <div className="book-item-info text-center">
                    <div className="book-item-info-item title">
                      <span className="tit">{book.name}</span>
                    </div>
                    <div className="book-item-info-item author">
                      <span className="text-capitalize">
                        <span className="stit">Author: </span>{book.author}
                      </span>
                    </div>
                    <div className="book-item-info-item category">
                      <span className="text-capitalize">
                      <span className="stit">category: </span>{book.category}
                      </span>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}

            </div><Pagination links={books.meta.links} />
          </div>
        </section>
    </AuthenticatedLayout>
  );
}

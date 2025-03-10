import PageCardStore from "@/components/PageCardStore";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/PagePagination";
import { fetchApi } from "@/helpers/fetch-api";
import { Book } from "@/interfaces/book";
import { GetServerSideProps } from "next";

interface StoreProps {
  searchParams: {
    page?: string;
  };
}

const getBooks = async (page = 1, pageSize = 4) => {
  const path = "/books";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);
  return { data: data, pagination: meta.pagination };
};

const Store = async ({ searchParams }: StoreProps) => {
  const { page } = searchParams;
  let pageNumber = page ? parseInt(page) : 1;
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
    console.log(
      "Valor no válido como parámetro de página. Se establece a 1. 🐤"
    );
  }

  const { data, pagination } = await getBooks(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeader text="Book Store" />
      <Pagination pagination={pagination} />
      <section className="grid grid-cols-1 gap-4">
        {data.map((book: Book) => (
          <PageCardStore
            key={book.id}
            book={book}
          />
        ))}
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchParams = context.query;
  return {
    props: {
      searchParams,
    },
  };
};

export default Store;

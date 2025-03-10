import PageCardStore from "@/components/PageCardStore";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/PagePagination";
import { fetchApi } from "@/helpers/fetch-api";
import { Book } from "@/interfaces/book";
import { Metadata } from "next";

interface StoreProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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

export async function generateMetadata({ searchParams }: { searchParams: StoreProps['searchParams'] }): Promise<Metadata> {
  const { page } = await searchParams;
  let pageNumber = page && !Array.isArray(page) ? parseInt(page) : 1;
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
    console.log(
      "Valor no válido como parámetro de página. Se establece a 1. 🐤"
    );
  }

  // Puedes ajustar los metadatos según sea necesario
  return {
    title: `Books - Page ${pageNumber}`,
  };
}

export default async function Store({
  searchParams,
}: {
  searchParams: StoreProps['searchParams'];
}) {
  const { page } = await searchParams;
  let pageNumber = page && !Array.isArray(page) ? parseInt(page) : 1;
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
    console.log(
      "Valor no válido como parámetro de página. Se establece a 1. 🐤"
    );
  }

  const { data, pagination } = await getBooks(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeader title="Book Store" />
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
}

import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        Страница не найдена
      </h1>
      <p className="mt-3 max-w-md text-foreground-muted">
        Возможно, ссылка устарела или проект еще не опубликован.
      </p>
      <div className="mt-8">
        <Button href="/">На главную</Button>
      </div>
      <Link href="/#projects" className="mt-4 text-sm text-foreground-muted hover:text-accent">
        Смотреть проекты
      </Link>
    </div>
  );
}

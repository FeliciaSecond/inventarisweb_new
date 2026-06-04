import { toaster } from "../components/ui/toaster";

export function TampilPesan(judul, pesan) {
  return toaster.create({
    title: judul,
    description: pesan,
    duration: 1000,
  });
}

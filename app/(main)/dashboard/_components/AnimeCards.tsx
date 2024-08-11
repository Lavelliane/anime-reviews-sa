import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface AnimeSummary {
  id: number;
  alt: string;
  title: string;
  season: string;
  imgUrl: string;
}

export default function AnimeCard({ id, alt, title, season, imgUrl }: AnimeSummary) {
    return (
      <Card className="py-4 h-auto w-[280px] flex flex-col justify-between" shadow="sm">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{alt}</p>
          <small className="text-default-500">{season}</small>
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={`${process.env.STRAPI_BASE_URL}${imgUrl}`}
            width={270}
            height={180}
          />
        </CardBody>
      </Card>
    );
  }
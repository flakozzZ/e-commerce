import { Card } from "flowbite-react";

interface CardData {
    id: number
    href: string;
    imgAlt: string;
    imgSrc: string;
    title: string;
    description: string;
}

interface CatalogCardProps {
    cards: CardData[];
}

const CatalogCard: React.FC<CatalogCardProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    href={card.href}
                    className="max-w-sm"
                    imgAlt={card.imgAlt}
                    imgSrc={card.imgSrc}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {card.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                    </p>
                </Card>
            ))}
        </div>
    );
};

export default CatalogCard;

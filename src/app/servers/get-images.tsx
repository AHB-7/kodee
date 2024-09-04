"use client";

import { gql, useQuery } from "@apollo/client";
import client from "./apolloClient";
import Image from "next/image";

const GET_IMAGES = gql`
    query MyQuery {
        globaImages {
            alt
            image {
                url
            }
        }
    }
`;

interface ImageData {
    url: string;
}

interface GlobalImage {
    alt: string;
    image: ImageData;
}

interface GlobalImages {
    globaImages: GlobalImage[];
}

export default function MyComponent() {
    const { loading, error, data } = useQuery<GlobalImages>(GET_IMAGES, {
        client,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading images.</p>;

    return (
        <div className="grid items-center grid-flow-col justify-center absolute h-screen w-full">
            {data?.globaImages[0]?.image.url && data?.globaImages[0]?.alt ? (
                <Image
                    className=" opacity-80 hidden lg:block rounded-full scale-110 rotate-90 object-fill   filter contrast-150 brightness-75"
                    src={data.globaImages[0].image.url}
                    alt={data.globaImages[0].alt} //
                    width={300}
                    height={300}
                />
            ) : (
                <p>No image data available</p>
            )}{" "}
            {data?.globaImages[0]?.image.url && data?.globaImages[0]?.alt ? (
                <Image
                    className="opacity-80 hidden md:block rounded-full rotate-90 scale-110 object-fill   filter contrast-150 brightness-75"
                    src={data.globaImages[1].image.url}
                    alt={data.globaImages[1].alt} //
                    width={400}
                    height={300}
                />
            ) : (
                <p>No image data available</p>
            )}
            {data?.globaImages[0]?.image.url && data?.globaImages[0]?.alt ? (
                <Image
                    className=" opacity-80 rounded-full scale-150 rotate-90 object-fill   filter contrast-150 brightness-75"
                    src={data.globaImages[1].image.url}
                    alt={data.globaImages[1].alt} //
                    width={400}
                    height={300}
                />
            ) : (
                <p>No image data available</p>
            )}{" "}
            {data?.globaImages[0]?.image.url && data?.globaImages[0]?.alt ? (
                <Image
                    className="opacity-80 hidden md:block rounded-full rotate-90 scale-110 object-fill   filter contrast-150 brightness-75"
                    src={data.globaImages[1].image.url}
                    alt={data.globaImages[1].alt} //
                    width={400}
                    height={300}
                />
            ) : (
                <p>No image data available</p>
            )}{" "}
            {data?.globaImages[0]?.image.url && data?.globaImages[0]?.alt ? (
                <Image
                    className="opacity-80 hidden lg:block rounded-full scale-110 rotate-90 object-fill   filter contrast-150 brightness-75"
                    src={data.globaImages[1].image.url}
                    alt={data.globaImages[1].alt} //
                    width={300}
                    height={300}
                />
            ) : (
                <p>No image data available</p>
            )}
        </div>
    );
}

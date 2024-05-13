"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portafolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex min-h-screen flex-col p-6">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-wrap w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20 justify-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 flex justify-center">
                Portafolio
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title 1</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title 2</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title 3</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

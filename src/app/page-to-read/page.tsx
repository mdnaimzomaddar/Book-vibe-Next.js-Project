"use client";

import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import IBook from '../Types/IBook';
import { BookContext } from '../context/BookContext';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;
  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  // ✅ ১. useContext এখন কম্পোনেন্টের ভেতরে রয়েছে
  const context = useContext(BookContext);

  if (!context) {
    return <div className="text-center py-10">Loading chart...</div>;
  }

  const { read = [] } = context;

  // ✅ ২. dynamic data mapping এখন কম্পোনেন্টের ভেতরে
  const data = read.map((book: IBook) => {
    return {
      name: book.bookName,
      totalPages: book.totalPages,
    };
  });

  if (read.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl font-semibold text-gray-500">
          No books added to Read list to generate chart.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center p-4 bg-gray-50 rounded-2xl mt-8">
      <div style={{ width: '100%', maxWidth: '800px', height: '450px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" />
            <YAxis />
            <Tooltip cursor={{ fillOpacity: 0.1 }} />
            <Bar dataKey="totalPages" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReadBooks;
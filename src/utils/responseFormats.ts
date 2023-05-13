import { Request, Response } from 'express';

interface ResponseFormat {
  success?: boolean;
  error?: boolean;
  message?: string;
  data?: unknown;
}

type TypedResponse<T> = Omit<Response, 'json' | 'status'> & {
  json(data: T): TypedResponse<T>;
} & { status(code: number): TypedResponse<T> };

export type AppResponse = TypedResponse<ResponseFormat>;

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  year: number;
  genre: [string];
  rating: number;
}

export interface AppRequest extends Request {
  movie: Movie;
}
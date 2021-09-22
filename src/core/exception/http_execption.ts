class HttpException extends Error {
  status: number;
  message: string;
  error: unknown;
  constructor(status: number, message: string, error:unknown) {
    super(message);
    this.status = status;
    this.message = message;
    this.error = error;
  }
}
 
export default HttpException;
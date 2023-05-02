export class ErrorBase {
	public readonly message: string;

	public readonly statusCode: number;

	constructor(
		message: string = "Error internal server",
		statusCode: number = 500
	) {
		this.message = message;
		this.statusCode = statusCode;
	}
}

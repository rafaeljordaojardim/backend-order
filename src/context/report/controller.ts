import { ProductUseCase } from "../../use-case/product/product-use-case";
import { ResponseStatus } from "../../facilities/enums/respose-status";

export class ProductController {
  constructor(
    private readonly productUseCase: ProductUseCase = new ProductUseCase()
  ) {}

  public async getProductReport(req, res, next): Promise<void> {
    try {
      const params: {name, price, kg, stock, photoId } = req.body;
      const product = await this.productUseCase.save(params);
      if (product) {
        return res.status(ResponseStatus.CREATED).json({ message: `Created` });
      }
      return this.sendServerError(res);
    } catch (error) {
      return this.sendServerError(res, error);
    }
  }
  private sendServerError(res, error?): void{
    const message = error.message || { message: `Something went wrong` };
    return res.status(ResponseStatus.SERVER_ERROR).json(message);
  }
}
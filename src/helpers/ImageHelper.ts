export const calculateAspectRatioFit = (
    srcWidth: number,
    srcHeight: number,
    maxWidth: number,
    maxHeight: number,
) => {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)

    return {
        width: srcWidth * ratio,
        height: srcHeight * ratio,
    }
}

export interface ISize {
  width: number
  height: number
}

export function getImageSize(uri: string): Promise<ISize> {
    const success =
    (resolve: (value?: ISize | PromiseLike<ISize>) => void) =>
        (width: number, height: number) => {
            resolve({
                width,
                height,
            })
        }
    const error = (reject: (reason?: any) => void) => (failure: Error) => {
        reject(failure)
    }

    // return new Promise<ISize>((resolve, reject) => {
    //   Image.getSize(uri, success(resolve), error(reject))
    // })
}

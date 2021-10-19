type regularFunction = () => void;
type asyncRegularFunction = () => Promise<void>;
type fileLoaderFunction = () => string;
type asyncFileLoaderFunction = () => Promise<string | void>;

export {
    asyncRegularFunction,
    regularFunction,
    asyncFileLoaderFunction,
    fileLoaderFunction
}
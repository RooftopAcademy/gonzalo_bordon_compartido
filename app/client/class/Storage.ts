export default abstract class Storage<T> {
  private readonly storageName: string;

  constructor(storageName: string, storageObject: T) {
    this.storageName = storageName;
    if (!sessionStorage.getItem(storageName)) {
      sessionStorage.setItem(storageName, JSON.stringify(storageObject));
    }
  }

  protected updateStorage(storageObject: T): void {
    sessionStorage.setItem(this.storageName, JSON.stringify(storageObject));
  }

  protected deleteStorage(): void {
    sessionStorage.removeItem(this.storageName);
  }

  protected getStorage(): T {
    return JSON.parse(sessionStorage.getItem(this.storageName));
  }
}

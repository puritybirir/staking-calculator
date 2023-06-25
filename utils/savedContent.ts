type SavedContent = {
  [key:string]: () => any;
}

const savedContent:SavedContent = {};

export const saved = (cellId: string, atomFactory: any) => {
  if(savedContent[cellId]){
    return savedContent[cellId]
  }

  savedContent[cellId] = atomFactory();

  return savedContent[cellId];
}

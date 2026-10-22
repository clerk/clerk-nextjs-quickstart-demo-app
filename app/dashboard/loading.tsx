export default function Loading() {
  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 z-1 flex flex-col items-center justify-center bg-white'>
      <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></div>
    </div>
  );
}

import { Skeleton } from "@mui/material";

export const FundraisesSkeleton = () => {
  return (
    <div className="flex gap-8 justify-center flex-wrap">
      <div className="flex flex-col md:w-[400px] 2xl:[450px] bg-white rounded-2xl p-5 gap-4">
        <div className="flex justify-between items-center">
          <Skeleton height={"40px"} width={"250px"} />
          <Skeleton height={"40px"} width={"80px"} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton variant="rounded" height={"200px"} />
          <Skeleton variant="rounded" height={"10px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
        <div className="flex justify-around gap-3">
          <Skeleton className="w-full" height={"50px"} />
          <Skeleton className="w-full" height={"50px"} />
        </div>
      </div>
      <div className="flex flex-col md:w-[400px] 2xl:[450px] bg-white rounded-2xl p-5 gap-4">
        <div className="flex justify-between items-center">
          <Skeleton height={"40px"} width={"250px"} />
          <Skeleton height={"40px"} width={"80px"} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton variant="rounded" height={"200px"} />
          <Skeleton variant="rounded" height={"10px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
        <div className="flex justify-around gap-3">
          <Skeleton className="w-full" height={"50px"} />
          <Skeleton className="w-full" height={"50px"} />
        </div>
      </div>
      <div className="flex flex-col md:w-[400px] 2xl:[450px] bg-white rounded-2xl p-5 gap-4">
        <div className="flex justify-between items-center">
          <Skeleton height={"40px"} width={"250px"} />
          <Skeleton height={"40px"} width={"80px"} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton variant="rounded" height={"200px"} />
          <Skeleton variant="rounded" height={"10px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
        <div className="flex justify-around gap-3">
          <Skeleton className="w-full" height={"50px"} />
          <Skeleton className="w-full" height={"50px"} />
        </div>
      </div>
    </div>
  );
};

export const FundsSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-[15px] justify-center">
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
      <div className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl">
        <div className="w-fit">
          <Skeleton variant="rounded" width={"100px"} height={"100px"} />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Skeleton variant="rounded" height={"32px"} />
          <Skeleton variant="rounded" height={"50px"} />
        </div>
      </div>
    </div>
  );
};

export const PetitionsSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[15px]">
      <div className="flex flex-col w-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"200px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-between">
          <Skeleton width={"250px"} height={"30px"} />
          <Skeleton width={"250px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"200px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-between">
          <Skeleton width={"250px"} height={"30px"} />
          <Skeleton width={"250px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"200px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-between">
          <Skeleton width={"250px"} height={"30px"} />
          <Skeleton width={"250px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"200px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-between">
          <Skeleton width={"250px"} height={"30px"} />
          <Skeleton width={"250px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"200px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-between">
          <Skeleton width={"250px"} height={"30px"} />
          <Skeleton width={"250px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"200px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-between">
          <Skeleton width={"250px"} height={"30px"} />
          <Skeleton width={"250px"} height={"30px"} />
        </div>
      </div>
    </div>
  );
};

export const InitiativesSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[15px]">
      <div className="flex flex-col f-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"250px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-start">
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col f-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"250px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-start">
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col f-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"250px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-start">
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col f-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"250px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-start">
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col f-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"250px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-start">
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
        </div>
      </div>
      <div className="flex flex-col f-full md:w-[640px] p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <Skeleton width={"250px"} height={"50px"} />
          <Skeleton width={"100px"} height={"40px"} />
        </div>
        <Skeleton height={"200px"} />
        <div className="flex gap-8 justify-start">
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
          <Skeleton width={"100px"} height={"30px"} />
        </div>
      </div>
    </div>
  );
};

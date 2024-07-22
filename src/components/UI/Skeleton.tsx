export interface SkeletonProps {
    times: number,
}

function Skeleton({ times }: SkeletonProps) {
    const renderedBoxes = Array(times).fill(0).map((_, i) => {
        return <div key={i}>Waiting for data ...</div>
    });

    return renderedBoxes;
}

export default Skeleton;
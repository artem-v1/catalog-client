export interface ReviewInterface {
    reviewId: number;
    companyId: number;
    photo: string;
    title: string;
    date: string; 
    reviewContent: string;
    reviewLike: number;
    reviewUnlike: number;
}

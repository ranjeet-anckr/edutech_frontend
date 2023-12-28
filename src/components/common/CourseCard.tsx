import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RouterLink } from "./router-link";

const CourseCard = ({ course }: any) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.5s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={course.courseImg}
        title="green iguana"
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography gutterBottom variant="h6" component="div">
          {course.courseName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.courseCategories}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: Rs {course.coursePrice}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" variant="contained">
          Enroll Now
        </Button>
        <Button
          size="small"
          variant="contained"
          component={RouterLink}
          href={`/course/${course.id}`}
        >
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;

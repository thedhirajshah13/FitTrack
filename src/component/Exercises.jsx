import React, { useState, useEffect } from "react";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { exerciseoption, fetchData } from "../utils/ExerciseData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ Exercise, setExercise, bodyPart }) => {
  // Intialization..
  const [currentPage, setcurrentPage] = useState(1);
  const counter = 10;
  const indexOfLastExercise = currentPage * counter;
  const indexOfFirstExercise = indexOfLastExercise - counter;
  // const currentExercise=Exercise.slice(indexOfFirstExercise, indexOfLastExercise)

  let i = 1;

  // Function Pagination...
  const Paginate = (e, value) => {
    i <= Exercise.length && setcurrentPage(i);
    console.log(i);
    i++;
    window.scroll({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const FetchingData = async () => {
      let bodyPartData = [];

      if (bodyPart === "All") {
        bodyPartData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseoption
        );
      } else {
        bodyPartData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseoption
        );
      }
      console.log(bodyPartData);
      //  setExercise(bodyPartData)
    };
    FetchingData();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography fontSize="44px" fontWeight="600" mb="84px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {Exercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {Exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Exercise.length / counter)}
            page={currentPage}
            onClick={Paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

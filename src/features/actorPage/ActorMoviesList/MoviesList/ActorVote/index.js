import { Wrapper, Star, Average, OutOf, Count } from "./styled";

export const ActorVote = ({ vote }) => (
  !!vote && (
    <Wrapper>
      <Star
        hidden={!vote?.average}
      />

      {!!vote?.average && (
        <>
          <Average>
            {vote.average.toFixed(1)}
          </Average>
        </>
      )}

      <Count
        $noVotes={!vote?.count}
      >
        {vote?.count
          ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
          : "No votes yet"
        }
      </Count>
    </Wrapper>
  )
);
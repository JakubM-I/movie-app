import { Wrapper, Star, Average, OutOf, Count } from "./styled";

export const BackdropVote = ({ vote }) => (
  !!vote && (
    <Wrapper>
      <Star />
      {!!vote?.average && (
        <>
          <Average>{vote.average.toFixed(1)}</Average>
          <OutOf>/ 10</OutOf>
        </>
      )}

      <Count noVotes={!vote?.count}>
        {vote?.count
          ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
          : "no votes yet"
        }
      </Count>
    </Wrapper>
  )
);
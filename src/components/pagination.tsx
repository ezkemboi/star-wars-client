/**
 * This makes use of styled-components
 * Trying to get pagination done in styled-components 
 * to help me learn on styled-components by using it
 */
import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const PaginationWrapper = styled.section`
  display: inline-block;
`

const TextElement = styled(Text)`
  color: ${props => props.page === props.pageNo && props.isPageNo ? '#ffffff' : '#1A202c'};
  border: ${props => props.page === props.pageNo && props.isPageNo ? '1px solid #4CAF50' : '1px solid #ddd'};
  float: left;
  padding: 8px 16px;
  transition: background-color .3s;
  margin: 0 4px;
  background-color: ${props => props.page === props.pageNo && props.isPageNo ? '#4CAF50' : '#ffffff'};
  ${props => props.page !== props.pageNo ? '&:hover {background-color: #ddd}': ''}
`

interface PaginationProps {
  page: number,
  fetchByPageNumber: Function,
  pages: Array<number>
}

const Pagination = (
  {
    page,
    pages,
    fetchByPageNumber
  }: PaginationProps
) => {

  return (
    <Flex marginTop="15px" justifyContent="center">
      <PaginationWrapper>
        {
          // disable previous when page is 1
          page !== 1 &&
          <TextElement 
            cursor="pointer" 
            onClick={() => fetchByPageNumber(page - 1)}
          >
            &laquo;
          </TextElement>
        }
        {
          pages.map((pageNo: number) => {
            return (
              <TextElement 
                key={pageNo} 
                cursor="pointer"
                page={page}
                pageNo={pageNo}
                isPageNo={true}
                onClick={() => fetchByPageNumber(pageNo)}
              >
                {pageNo}
              </TextElement>
            )
          })
        }
        {
          // disable when page is the last page
          page !== pages.length && 
          <TextElement 
            cursor="pointer" 
            onClick={() => fetchByPageNumber(page + 1)}
          >
            &raquo;
          </TextElement>
        }
      </PaginationWrapper>
    </Flex>
  )
}

export default Pagination;

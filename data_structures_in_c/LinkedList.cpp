//Linked List Inserting a node at beginning
#include <stdlib.h>
#include <stdio.h>

struct Node{
    int data;
    struct Node* next;
};

struct Node* head;

void Reverse(){
    Node *current, *prev, *next;
    current=head;
    prev=NULL;
    while(current != NULL){
        next=current->next;
        current->next=prev;
        prev=current;
        current=next;
    }
    head=prev;
}

void Insert(int data, int n)
{
    Node* temp1 = new Node();
    temp1->data = data;
    temp1->next = NULL;
    if(n==1) {
        temp1->next = head;
        head=temp1;
        return;
    }
    Node* temp2 = head;
    for(int i=0; i<n-2; i++){
        temp2 = temp2->next;
    }
    temp1->next = temp2->next;
    temp2->next = temp1;
}

void Delete(int n){
    Node* temp1 = head;
    if(n==1) {
        head = temp1->next;
        free(temp1);
        return;
    } 
    for(int i=0; i<n-2; i++) {
        temp1=temp1->next;
    }
    Node* temp2 = temp1->next; //nth Node
    temp1->next = temp2->next; //n+1th Node
    free(temp2); // deletes temp2;
}

void Print(){
    Node* temp =head;
    while(temp != NULL){
        printf("%d",temp->data);
        temp=temp->next;
    }
    printf("\n");
}
int main() {
    head = NULL;
    Insert(2,1);
    Insert(3,2);
    Insert(4,1);
    Insert(5,2);
    Print();
    Reverse();
    Print();
    int n;
    printf("Enter a number \n");
    scanf("&d",&n);
    Delete(n);
    Print();
}